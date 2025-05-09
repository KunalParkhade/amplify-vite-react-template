import { defineAuth } from '@aws-amplify/backend-auth';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});

import { referenceAuth } from '@aws-amplify/backend-auth';

// export const auth = referenceAuth({
//   userPoolId: 'us-east-1_xxxx',
//   identityPoolId: 'us-east-1:b57b7c3b-9c95-43e4-9266-xxxx',
//   authRoleArn: 'arn:aws:iam::xxxx:role/amplify-xxxx-mai-amplifyAuthauthenticatedU-xxxx',
//   unauthRoleArn: 'arn:aws:iam::xxxx:role/amplify-xxxx-mai-amplifyAuthunauthenticate-xxxx',
//   userPoolClientId: 'xxxx',
// });