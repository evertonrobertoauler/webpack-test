import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebpackTestAppComponent } from '../app/webpack-test.component';

beforeEachProviders(() => [WebpackTestAppComponent]);

describe('App: WebpackTest', () => {
  it('should create the app',
      inject([WebpackTestAppComponent], (app: WebpackTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'webpack-test works!\'',
      inject([WebpackTestAppComponent], (app: WebpackTestAppComponent) => {
    expect(app.title).toEqual('webpack-test works!');
  }));
});
