
  function twoHighest(arr) {
    let noDups = [...new Set(arr)].sort((a,b)=> b-a).slice(0,2)
    return noDups
  }

  describe("Fixed Tests", () => {
    it("Tests", () => {
      assert.deepEqual(twoHighest([]), [])
      assert.deepEqual(twoHighest([15]), [15])
      assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17])
    })
  })

  //I could not get jest working today, I want to try another MVC app using ESC. Tomorrow, I'll try again with https://jestjs.io/docs/getting-started
  