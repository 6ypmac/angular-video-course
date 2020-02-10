import { TransformMinutesPipe } from './transform-minutes.pipe';

describe('TransformMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformMinutesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Duration should be "2h 10min" after transform', () => {
    const pipe = new TransformMinutesPipe();
    const tranformedDuration = pipe.transform(130);
    expect(tranformedDuration).toBe('2h 10min');
  });

  it('Duration should be "59min" after transform', () => {
    const pipe = new TransformMinutesPipe();
    const tranformedDuration = pipe.transform(59);
    expect(tranformedDuration).toBe('59min');
  });
});
