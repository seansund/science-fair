describe.only('a palindrome function', () => {
  it('canary test verifies the test infrastructure', () => {
    true.should.be.true();
  });

  const isPalindrome = (text) => {
    if (!text || text.trim().length === 0) return false;
    return text.split('').reverse().join('') === text;
  };

  describe('behaves as follows', () => {
    it('"mom" is a palindrome', () => {
      isPalindrome('mom').should.be.true();
    });
    it('"mop" is not a palindrome', () => {
      isPalindrome('mop').should.be.false();
    });
    it('"mom dad mom" is a palindrome', () => {
      isPalindrome('mom dad mom').should.be.true();
    });
    it('"   " is not a palindrome', () => {
      isPalindrome('   ').should.be.false();
    });
    it('<undefined> is not a palindrome', () => {
      isPalindrome().should.be.false();
    });
  });
});
