/*
 * Public API Surface of core
 */
export { CORE_CONFIG, CoreConfig } from './lib/config/config'

export * from './lib/core.service';
export * from './lib/core.component';
export * from './lib/core.module';

export { BaseApiService } from './lib/services/base-api.service';
export { ErrorHandlerService } from './lib/services/error-handler.service';
export { InterceptorService } from './lib/services/interceptor.service';

