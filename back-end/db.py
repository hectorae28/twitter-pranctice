from ast import If
import requests
from pymongo import MongoClient
_URL_={
    'user':'https://jsonplaceholder.typicode.com/users/',
    'posts':'https://jsonplaceholder.typicode.com/posts',
}

class db_controller:
    def __init__(self,url):
        self.users=requests.get(url['user']).json()
        self.posts=requests.get(url['posts']).json()
        client = MongoClient("mongodb://127.0.0.1:27017")
        self.db = client["intest"]

    def write_users(self):
        #print(self.users)
        print(self.db.users.find_one())
        for user in self.users:
            #print(user["name"])
            self.db.users.insert_one({
                "name":user["name"],
                "username":user["username"],
                "email":user["email"],
                "phone":user["phone"],
                "company":user["company"],
            })
    
    def write_posts(self):
        for user in self.users:
            for post in self.posts:
                if post["userId"] == user["id"]:
                    db_user=self.db.users.find_one({"name":user["name"]})
                    self.db.posts.insert_one({
                        "user":db_user,
                        "title":post["title"],
                        "body":post["body"]
                    })
       

if __name__=='__main__':
    user=db_controller(_URL_)
    user.write_posts()
    