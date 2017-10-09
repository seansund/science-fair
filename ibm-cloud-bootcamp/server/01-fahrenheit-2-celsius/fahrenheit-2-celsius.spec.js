import {fahrenheit2celsius} from './fahrenheit-2-celsius';

describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  
  describe('behaves as follows', () => {
    it('32 degrees F is 0 degrees C', () => {
      fahrenheit2celsius(32).should.equal(0);
    });
    it('212 degress F is 100 degress C', () => {
      fahrenheit2celsius(212).should.equal(100);
    });
    it('-40 degress F is -40 degrees C', () => {
      fahrenheit2celsius(-40).should.equal(-40);
    });
  });
});
