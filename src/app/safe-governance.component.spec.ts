import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SafeGovernanceAppComponent } from '../app/safe-governance.component';

beforeEachProviders(() => [SafeGovernanceAppComponent]);

describe('App: SafeGovernance', () => {
  it('should create the app',
      inject([SafeGovernanceAppComponent], (app: SafeGovernanceAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'safe-governance works!\'',
      inject([SafeGovernanceAppComponent], (app: SafeGovernanceAppComponent) => {
    expect(app.title).toEqual('safe-governance works!');
  }));
});
