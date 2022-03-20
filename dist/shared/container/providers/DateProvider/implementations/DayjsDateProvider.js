"use strict";

exports.__esModule = true;
exports.DayjsDateProvider = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_utc.default);

class DayjsDateProvider {
  addMonth(month) {
    return (0, _dayjs.default)().add(month, 'month').toDate();
  }

  addDays(days) {
    return (0, _dayjs.default)().add(days, 'month').toDate();
  }

}

exports.DayjsDateProvider = DayjsDateProvider;