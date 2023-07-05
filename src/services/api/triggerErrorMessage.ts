import config from './config';
import errorMessages from './errorMessages';
import { ErrorConfig, ApiError } from './types';

const triggerErrorMessage = (errorConfig: ErrorConfig, apiError: ApiError) => {
  if (errorConfig.hide === true && typeof config.errorMessageFunction !== 'function') return;

  let message = errorMessages.default;
  if (errorConfig && errorConfig.message) {
    message = errorConfig.message;
  } else if (apiError.reason && errorMessages[apiError.reason]) {
    message = errorMessages[apiError.reason];
  }

  config.errorMessageFunction(message);
};

export default triggerErrorMessage;
