import {fahrenheit2celsius} from './fahrenheit-2-celsius';

describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('behaves like', () => {
    it('32 deg F is 0 deg C', () => {
      fahrenheit2celsius(32).should.equal(0);
    });
    it('212 deg F is 100 deg C', () => {
      fahrenheit2celsius(212).should.equal(100);
    });
    it('-40 deg F is -40 deg C', () => {
      fahrenheit2celsius(-40).should.equal(-40);
    });
  });
});
