const touch = function (xpath, done) {
  this.evaluate_now(function (xpath, done) {
    const ele = window.document.evaluate(xpath,
                      window.document,
                      null,
                      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                      null).snapshotItem(0)

    const rect = ele.getBoundingClientRect()
    const t = new Touch({
      identifier: Date.now(),
      target: ele,
      clientX: rect.top,
      clientY: rect.right,
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5
    })
    const touchEvent = new TouchEvent('touchend', {
      cancelable: true,
      bubbles: true,
      touches: [t],
      targetTouches: [],
      changedTouches: [t],
      shiftKey: true
    })

    ele.dispatchEvent(touchEvent)
    done(null)

  }, done, xpath)

}

export default touch
