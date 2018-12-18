const styles = {
  notExpanded: {
    previewer: {
      "maxWidth": "800px",
      "marginLeft": "auto",
      "marginRight": "auto",
    },
    topBar: {
    }
  },
  expanded : {
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
  },
};

export default styles;