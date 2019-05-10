import { PurePipe } from './pure.pipe';

describe('PureImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PurePipe();
    expect(pipe).toBeTruthy();
  });
});
