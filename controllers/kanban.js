/**
 * GET /kanban
 * List all kanban.
 */

exports.getKanbans = (req, res) => {
  res.render('kanban/list', { title: '首页' });
};

exports.getKanbansAdd = (req, res) => {
  res.render('kanban/add', { title: '添加用户故事' });
};
