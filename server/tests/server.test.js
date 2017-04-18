const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//Test life cycle method
beforeEach((done)=>{
    //wipes all todo's
    Todo.remove({}).then(()=>done());
});

describe('POST /todos',()=>{
    it('should create a new todo',(done)=>{
        var text = 'Test todo text';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){return done(err);}
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        });
    });
    //test case2
    it('should not create todo with invalid body data',(done)=>{
        //POST request send empty object cause test to fail because we won't be able to save the model
        //expect 400. no assumptions on body that comes back
        //database collection count should show zero
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){return done(err);}
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }).catch((e)=>done(e));
        })
    });
});

