class arraySearch {
  static search(enquiry, array){
    const errorMessage = 'error message'
    const notFound = 'element not found'

    if(enquiry && array) {
      const result = array.find((element) => {
        return element.id === enquiry
      })
      if(result) {
        return result
      } else return notFound
    } else return errorMessage

  }
}

module.exports = arraySearch