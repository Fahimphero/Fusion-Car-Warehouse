import React from 'react';
import { Accordion } from 'react-bootstrap';
import picture from '../../Images/question-mark.webp'

const Blogs = () => {
    return (
        <div>
            <div className='w-75 mx-auto mt-5 mb-4'>
                <h2 className='text-center'>Q/A: </h2>
                <div className='row'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img style={{ height: '600px' }} className='img-fluid' src={picture} alt="" />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <h5>1. What is the difference between  Javascript and Nodejs?</h5></Accordion.Header>
                                <Accordion.Body >
                                    <p><strong>Javascript: </strong></p>
                                    Javascript is a scripted programming language that can run in any browser. Chrome uses its V8 engine to run javascript code. It can run in any web browser with a proper browser engine. JavaScript is mainly used for any client-side activity for a web application.
                                    Javascript is used in frontend development.
                                    <p className='mt-3'><strong> Nodejs: </strong></p> Node JS is an interpreter or running environment for a JavaScript programming language. We can run Javascript outside the browser with the help of Node JS. Node JS can only run in a V8 engine which is mainly used by google chrome. Nodejs is used in server-side development. V8 is the Javascript engine inside of node.js that runs Javascript.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5>  2. When should you use Nodejs and when should you use Mongodb?</h5></Accordion.Header>
                                <Accordion.Body>
                                    {/* <p><strong>Mongodb: </strong></p> */}
                                    MongoDB is a database system that gives us a chance to efficiently store documents in a database and to perform operations like data updates, deleting, or searching documents by some criteria. We primarily use MongoDB to store data.
                                    Nodejs is used in server-side development. NodeJs receives the request from the client side and completes the operation.Node.js can add, delete and modify data in our database. NodeJs is a server that connects the client side with the database.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h5>  3. What are the differences between Sql and Nosql databases?</h5></Accordion.Header>
                                <Accordion.Body>
                                    <p><strong>Sql: </strong></p>
                                    SQL means structured query language.
                                    SQL databases are primarily called as Relational Databases (RDBMS).SQL databases are table based databases. SQL requires specialized database hardware for better performance.
                                    <p className='mt-3'><strong> Nosql: </strong></p>
                                    NoSQL means non-structured query language.
                                    NoSQL database are primarily called as non-relational or distributed database.
                                    NoSQL databases can be document based, key-value pairs, graph databases.
                                    NoSQL uses commodity hardware for better performance.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;