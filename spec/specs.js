describe('romanNumeral', function() {
  it("returns I for 1", function() {
    expect(romanNumeral(1000)).to.eql("M")
  });
  it("returns the roman numeral for any specific singular value", function() {
    expect(romanNumeral(5)).to.eql("V")
  });
  it("adds two roman numeral values", function() {
    expect(romanNumeral(6)).to.eql("VI")
  });
  it("adds two larger roman numeral values", function() {
    expect(romanNumeral(38)).to.eql("XXXVIII")
  });
  it("accounts for subtraction numerals", function() {
    expect(romanNumeral(4)).to.eql("IV")
  });
  it("accounts for subtraction numerals", function() {
    expect(romanNumeral(49)).to.eql("XLIX")
  });
});
