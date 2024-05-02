/* module */
function delayedPromiseResolver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
}

/* exports */
export default delayedPromiseResolver;
