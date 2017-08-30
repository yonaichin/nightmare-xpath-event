const clickByXpath = function (xpath, done) {
  this.evaluate_now(function (xpath, done) {
    const ele = window.document.evaluate(xpath,
                      window.document,
                      null,
                      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                      null).snapshotItem(0)

    const event = document.createEvent('Event')

    event.initEvent('click', true, true)
    event.keyCode = 1
    event.key = event.code = 'click'
    ele.dispatchEvent(event)
    done(null)

  }, done, xpath)
}

export default clickByXpath
