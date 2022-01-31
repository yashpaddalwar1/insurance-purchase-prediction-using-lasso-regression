from flask import Flask, render_template,request
import pickle
from sklearn.preprocessing import StandardScaler
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Lasso,LassoCV

model = pickle.load(open('ridge.pickle','rb'))
# a = model.predict([[324.000000,107.0,4.0,4.0,4.5,8.87,1]])
app = Flask(__name__)
df = pd.read_csv('Admission_Prediction.csv')
df['GRE Score'].fillna(df['GRE Score'].mean(),inplace=True)
df['TOEFL Score'].fillna(df['TOEFL Score'].mean(),inplace=True)
df['University Rating'].fillna(df['University Rating'].mean(),inplace=True)
df.drop(columns=['Serial No.'],inplace=True)
x = df.drop(columns=['Chance of Admit'])
y = df['Chance of Admit']
scaler = StandardScaler()
arr = scaler.fit_transform(x)
xtrain,xtest,ytrain,ytest = train_test_split(arr,y,test_size=0.15,random_state=100)
lassocv = LassoCV(cv=5,max_iter=10000000,alphas=None,normalize=True)
lassocv.fit(xtrain,ytrain)
lasso = Lasso(alpha=lassocv.alpha_)
lasso.fit(xtrain,ytrain)


@app.route('/',methods=['POST','GET'])
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST','GET'])
def predict():
    if request.method == 'POST':
        # try:
            gre_score = float(request.form['gre'])
            toefl_score = float(request.form['toefl'])
            university_rating = float(request.form['university'])
            sop = float(request.form['sop'])
            lor = float(request.form['lor'])
            cgpa = float(request.form['cgpa'])
            whether_research = request.form['research']
            if whether_research == 'Yes':
                research = 1
            else:
                research = 0
            arr = [[gre_score,toefl_score,university_rating,sop,lor,cgpa,research]]
            arrfit = scaler.transform(arr)
            prediction = lasso.predict(arrfit)
            
            return render_template('predict.html',prediction=round(100*prediction[0]))
        # except Exception as e:
        #     print(f"The Exception is : {e}")
        #     return "<h1 style='color:red;'>Something went wrong :(</h1>"
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
