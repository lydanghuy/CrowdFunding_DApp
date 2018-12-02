'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestItem = require('../../../components/RequestItem');

var _RequestItem2 = _interopRequireDefault(_RequestItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\DATA\\STUDY\\VGU\\4th Year\\Thesis\\code\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestItem2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    numberOfContributors: _this2.props.numberOfContributors, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, ' Add Request '))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Found ', this.props.requestCount, ' requests.'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, numberOfContributors, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.numberOfContributors().call();

                            case 7:
                                numberOfContributors = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, numberOfContributors: numberOfContributors });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJudW1iZXJPZkNvbnRyaWJ1dG9ycyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwwRkFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUNyQyw0QkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsYUFBU0QsWUFBVCxHQUF3QjtBQUNwQixzQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLGVBQU8seUNBQTJCLElB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RUFBTDtBQUNJbEMsMkNBQVc0QixTQUFTTyxJQUFwQjtBQUNBLHVDQUFPUCxTQUFTYSxNQUFULENBQWdCLFFBQWhCLEVBQTBCLEVBQUVuQyxTQUFTQSxPQUFYLEVBQW9CTixVQUFVQSxRQUE5QixFQUF3Q3FCLGNBQWNBLFlBQXRELEVBQW9FZCxzQkFBc0JBLG9CQUExRixFQUExQixDQUFQOztBQUVKLGlDQUFLLEVBQUw7QUFDQSxpQ0FBSyxLQUFMO0FBQ0ksdUNBQU9xQixTQUFTYyxJQUFULEVBQVA7QUF6QlI7QUEyQkg7QUFDSixpQkE5Qk0sRUE4QkpsQixPQTlCSSxFQThCSyxJQTlCTCxDQUFQO0FBK0JILGFBakMwQyxDQUFoQyxDQUFYOztBQW1DQSxxQkFBU21CLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3pCLHVCQUFPdEIsS0FBSzdCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU9pRCxlQUFQO0FBQ0gsU0F6Q007QUFGTixLQUFELENBaE1KOztBQThPQSxXQUFPckQsWUFBUDtBQUNILENBeFBrQixrQkFBbkI7O2tCQTBQZUEsWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX1Byb21pc2UgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICdFOlxcXFxEQVRBXFxcXFNUVURZXFxcXFZHVVxcXFw0dGggWWVhclxcXFxUaGVzaXNcXFxcY29kZVxcXFxwYWdlc1xcXFxjYW1wYWlnbnNcXFxccmVxdWVzdHNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCBSZXF1ZXN0SXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RJdGVtJztcblxudmFyIFJlcXVlc3RJbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlcXVlc3RJbmRleCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW5kZXgoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXF1ZXN0SW5kZXgpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVxdWVzdEluZGV4Ll9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFJlcXVlc3RJbmRleCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXF1ZXN0SW5kZXgsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlclJvd3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUm93cygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoZnVuY3Rpb24gKHJlcXVlc3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVxdWVzdEl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBfdGhpczIucHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZDb250cmlidXRvcnM6IF90aGlzMi5wcm9wcy5udW1iZXJPZkNvbnRyaWJ1dG9ycywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBIZWFkZXIgPSBUYWJsZS5IZWFkZXIsXG4gICAgICAgICAgICAgICAgUm93ID0gVGFibGUuUm93LFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwgPSBUYWJsZS5IZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIEJvZHkgPSBUYWJsZS5Cb2R5O1xuXG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExheW91dCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdSZXF1ZXN0cydcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zLycgKyB0aGlzLnByb3BzLmFkZHJlc3MgKyAnL3JlcXVlc3RzL25ldycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0MFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgZmxvYXRlZDogJ3JpZ2h0Jywgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxMCB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgQWRkIFJlcXVlc3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBUYWJsZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSUQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBbW91bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlY2lwaWVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXBwcm92YWwgQ291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcHJvdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpbmFsaXplJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3dzKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1N1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnRm91bmQgJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0Q291bnQsXG4gICAgICAgICAgICAgICAgICAgICcgcmVxdWVzdHMuJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzLCBjYW1wYWlnbiwgcmVxdWVzdENvdW50LCBudW1iZXJPZkNvbnRyaWJ1dG9ycywgcmVxdWVzdHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q291bnQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMubnVtYmVyT2ZDb250cmlidXRvcnMoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mQ29udHJpYnV0b3JzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHsgYWRkcmVzczogYWRkcmVzcywgcmVxdWVzdHM6IHJlcXVlc3RzLCByZXF1ZXN0Q291bnQ6IHJlcXVlc3RDb3VudCwgbnVtYmVyT2ZDb250cmlidXRvcnM6IG51bWJlck9mQ29udHJpYnV0b3JzIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhfeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgICAgIH0oKVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXF1ZXN0SW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJudW1iZXJPZkNvbnRyaWJ1dG9ycyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwwRkFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUNyQyw0QkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsYUFBU0QsWUFBVCxHQUF3QjtBQUNwQixzQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLGVBQU8seUNBQTJCLElB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