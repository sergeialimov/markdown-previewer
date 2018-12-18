const styles = {
  topPane: {
    hidden: {
      "display": "none",
    },
    visible: {
    }
  },
  notExpanded: {
    editor: {
      "maxWidth": "600px",
      "height": "auto",
    },
  },
  expanded : {
    editor: {
      "width": '99%',
      "height": "100vh - 20px",
      "marginRight": "auto",
      "marginLeft": "auto",
    },
    textarea: {
      "height": "100vh",
    }
  },
};

export default styles;