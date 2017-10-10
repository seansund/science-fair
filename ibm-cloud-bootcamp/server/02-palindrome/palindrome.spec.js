describe.only('palindrome', () => {
  it('canary test verifies test infrastructure', () => {
    true.should.be.true();
  });

  let isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
  };

  describe('behaves as follows', () => {
    it('"racecar" is a palindrome', () => {
      isPalindrome('racecar').should.be.true();
    });
    it('"computer" is not a palindrome', () => {
      isPalindrome('computer').should.be.false();
    });
    it('"mom dad mom" is a palindrome', () => {
      isPalindrome('mom dad mom').should.be.true();
    });
  });
});
