const styles = {
  notExpanded: {
    editor: {
      "maxWidth": "600px",
      "height": "250px",
    },
    previewer: {
      "maxWidth": "800px",
      "marginLeft": "auto",
      "marginRight": "auto",
    },
    topBar: {
      "maxWidth": '800px',
    }
  },
  expanded : {
    editor: {
      "width": '99%',
      "marginRight": "auto",
      "marginLeft": "auto",
      "height": "100vh",
    },
    previewer: {
      "position": "absolute",
      "top": "0",
      "width": '99%',
      "marginRight": "auto",
      "marginLeft": "auto",
    },
    topBar: {
      "width": '100% - 1px',
    },
    textarea: {
      "height": "100vh",
    }
  },
};

export default styles;