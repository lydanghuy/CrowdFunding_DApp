'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampaignFactoryInstance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x5BBF6B07A63A0763e4E265eDf5c924213F646512');

exports.default = CampaignFactoryInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCLElBQUksY0FBS0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxLQUFLQyxLQUFMLENBQVcsMEJBQWdCQyxTQUEzQixDQUF0QixFQUE2RCw0Q0FBN0QsQ0FBOUI7O2tCQUVlTCx1QiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSAnLi9idWlsZC9DYW1wYWlnbkZhY3RvcnkuanNvbic7XG5cbnZhciBDYW1wYWlnbkZhY3RvcnlJbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKENhbXBhaWduRmFjdG9yeS5pbnRlcmZhY2UpLCAnMHg1QkJGNkIwN0E2M0EwNzYzZTRFMjY1ZURmNWM5MjQyMTNGNjQ2NTEyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduRmFjdG9yeUluc3RhbmNlOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCLElBQUksY0FBS0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxLQUFLQyxLQUFMLENBQVcsMEJBQWdCQyxTQUEzQixDQUF0QixFQUE2RCw0Q0FBN0QsQ0FBOUI7O2tCQUVlTCx1QiIsImZpbGUiOiJ1bmtub3duIn0=