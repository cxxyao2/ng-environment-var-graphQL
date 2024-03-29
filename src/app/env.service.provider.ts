import { EnvService } from './env.service';

export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables  from browser window
  const browserWindow = window || {};
  const browserWindowEnv = (browserWindow as any).__env || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js
  // If needed, a deep merge can be performed
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = (window as any).__env[key];
    }
  }

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
