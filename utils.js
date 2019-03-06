class Utils {
  static capitalize(message){
    const messageArray = message.split(' ');
    const capitalisedArray = messageArray.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1, word.length);
    });
    return capitalisedArray;
  }
}