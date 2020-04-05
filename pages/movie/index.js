Page({
  data: {
      tabIndex: 'hots'
  },
  switch (ev) {
      console.log(ev)
      this.setData({
          tabIndex: ev.target.dataset.tabIndex
      })
  }
});