from locust import HttpLocust, TaskSet, task
import json, uuid, io, random, string


class UserBehavior(TaskSet):
    def on_start(self):
        
        global token, headers, getId, userId,company

        #---------- Configurations

        #user token
        token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2JhY2suZGV2XC9iYWNrZW5kXC9hcGlcL2F1dGgiLCJpYXQiOjE0OTYxMzE2NDUsImV4cCI6MTQ5NjE1Njg0NSwibmJmIjoxNDk2MTMxNjQ1LCJqdGkiOiI4NmMxZGEzYTgzYThhMDVhYzUxMGYxN2FjMjg1MzU3NyJ9.KMPTAigJcICQeBjzxFCjTUVU2lOkzNwuH5qxKNd7E1M"

        # id for 
        getId = 1
        
        #user id
        userId = 9

        #company
        company = 11

        
        
     
        #-------------------------------

        headers = {'Authorization': 'Bearer '+token}
        
    #Add new 
    @task(1)
    def addRoom(self):
        response =  self.client.post("/leads/statuses",json={
        "name":self.randomString()
                      }, headers=headers)

        id = json.loads(response.content)["id"]
        
        if int(id) > 0:
            #update 
            self.client.put("/leads/statuses/"+str(id),json={
            "name":self.randomString()
            },headers=headers,name="/leads/statuses/:id")
            
            #delete 
            self.client.delete("/leads/statuses/"+str(id),headers=headers,name="/lead/products/:id")

    @task(2)
    def getAll(self):
        response = self.client.get("/leads/statuses",headers=headers)

    @task(3)
    def getById(self):
        response = self.client.get("/leads/statuses/"+str(getId),headers=headers)
        
    def randomString(self):
	return ''.join(random.choice(string.lowercase) for i in range(10))

    def randomInt(self):
        return str(random.randrange(0, 101, 2))

     
class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000
