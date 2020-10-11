# IDBlocks

IDBlocks aims at being the first application to offer a reliable way to verify ownership of digital content by means of blockchain technology. It also offers a template for managing and verifying identity across various services. The main goal of the app was to provide transparency without betraying privacy. This was done by means of the blockchain technology being used, namely Cosmos.

## Core components

1. Cosmos SDK and starport for creating the application-specific blockchain and managing the local server
2. Vue and basic HTML for the UI
3. Tendermint by virtue of the Cosmos SDK

## What do we currently offer?

We took baby steps in offering a way to assign a unique ID to each digital content being uploaded on the blockchain, with the goal of being used
for verification of ownership. Thus, we pave the ground to a larger image, namely identity verification across services. How? We plan on integrating our app with different APIs and thus communicate with said services. The plans are for this application to become an add-on of sorts, acting as a quick "digital stamp" for documents. This whole application is, in fact, our whitepaper on this subject :)

## What do we plan on developing further on?

Apart from what was described above, we aim at providing a more user-friendly interface, while highlighting the importance this application has. Namely, it allows anyone to verify and track their digital activity in a transparent , yet secure manner. On the subject of security and privacy...we aim at providing end-to-end encryption, such that the user is the sole capable entity of reading the contents. Apart from being a "digital stamp", our app is going to act like a "digital journal".

## Instructions

The application requires these dependencies:

* starport: npm i -g @tendermint/starport
* Open the 'server' folder with the terminal and run : npm add parcel-bundler local-cors-proxy axios @tendermint/sig
Axios is being used for the HTTP requests made for the server and cors as a proxy server.
* Same 'server' folder: npm run serve
* While in the user/IDBlocks path: starport serve

## Many thanks

Thanks for the mentors who were always available on the Discord chat and taking a real interest in our application. In fact, we owe them with developing some critical details with our application.

Created by the Crypto-Rabbits team:) A team of students battling with University while loving to code and develop cool stuff.
