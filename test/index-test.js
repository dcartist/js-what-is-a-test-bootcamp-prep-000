var index = require("../index.js")

if (true){
  console.log(index.message)
  if (index.name === "Susan"){
    console.log(index.name)
  }else {
    index.name = "Susan"
    console.log(index.name)
  }
  if (index.height>40){
    index.height = 39
    console.log (index.height)
  } else {
    console.log (index.height)
  }
  if (index.message === "${name} is ${height} inches tall"){
   console.log("${index.name} is ${index.height} inches tall")
  } else {
    console.log(index.message)
  }


}

/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
})
*/
