# Learn Serverless Node
An open source project to get you started in learning how to deploy your express app to serverless and your front end to s3

To get started, install dependencies using
`yarn`

To start the application on port 5000, run
`yarn start`

# screenshot
![screenshot](https://raw.githubusercontent.com/FermiDirak/LearnServerlessNode/master/screenshot.png)

How to deploy to AWS Lambda using claudia and serverless:
`yarn claudia-setup` sets up up and configures aws lamdba using claudia
`yarn claudia-deploy` deploys your express app to aws api-gateway and aws lambda. 
`yarn clauida-update` updates your express app on the serverless stack

It's that simple! Happy Hacking!
