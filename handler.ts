import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import middy from 'middy';
import { jsonBodyParser, httpErrorHandler } from 'middy/middlewares';
// import TicTacToe from './services/TicTacToe';

const originalHandler = (event : APIGatewayProxyHandler ) => { 
  return  {
    event
  };
};

const handler : any = middy(originalHandler)
  .use(jsonBodyParser())
  .use(httpErrorHandler()) 

 export { handler };
