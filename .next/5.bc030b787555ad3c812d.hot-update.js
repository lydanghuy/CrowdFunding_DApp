webpackHotUpdate(5,{

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(486);

var _Layout = __webpack_require__(1003);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1203);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1023);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(681);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\DATA\\STUDY\\VGU\\4th Year\\Thesis\\code\\pages\\campaigns\\show.js?entry';
// import ContributeForm from '../../components/ContributeForm';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCampaignDetails',
        value: function renderCampaignDetails() {
            var _props = this.props,
                campaignName = _props.campaignName,
                campaignDescription = _props.campaignDescription,
                balance = _props.balance,
                creator = _props.creator,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                numberOfContributors = _props.numberOfContributors;

            var items = [{
                header: creator,
                meta: 'Address of Campaign\'s Creator',
                description: 'The creator created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least ' + minimumContribution + ' wei to become a contributor'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by contributors'
            }, {
                header: numberOfContributors,
                meta: 'Number of Contributors',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Campaign Show'), this.renderCampaignDetails());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, details;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getCampaignDetails().call();

                            case 3:
                                details = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: details[0],
                                    campaignName: details[1],
                                    campaignDescription: details[2],
                                    balance: details[3],
                                    requestsCount: details[4],
                                    numberOfContributors: details[5],
                                    creator: details[6]
                                });

                            case 5:
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

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYW1wYWlnbkRldGFpbHMiLCJfcHJvcHMiLCJwcm9wcyIsImNhbXBhaWduTmFtZSIsImNhbXBhaWduRGVzY3JpcHRpb24iLCJiYWxhbmNlIiwiY3JlYXRvciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwibnVtYmVyT2ZDb250cmlidXRvcnMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsImRldGFpbHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldENhbXBhaWduRGV0YWlscyIsImNhbGwiLCJzZW50IiwiYWJydXB0Iiwic3RvcCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFQQSxJQUFJQSxlQUFlLCtFQUFuQjtBQU1BOzs7QUFHQSxJQUFJQyxlQUFlLFVBQVVDLFVBQVYsRUFBc0I7QUFDckMsNEJBQVVELFlBQVYsRUFBd0JDLFVBQXhCOztBQUVBLGFBQVNELFlBQVQsR0FBd0I7QUFDcEIsc0NBQWdCLElBQWhCLEVBQXNCQSxZQUF0Qjs7QUFFQSxlQUFPLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDQSxhQUFhRSxTQUFiLElBQTBCLDhCQUF1QkYsWUFBdkIsQ0FBM0IsRUFBaUVHLEtBQWpFLENBQXVFLElBQXZFLEVBQTZFQyxTQUE3RSxDQUFqQyxDQUFQO0FBQ0g7O0FBRUQsK0JBQWFKLFlBQWIsRUFBMkIsQ0FBQztBQUN4QkssYUFBSyx1QkFEbUI7QUFFeEJDLGVBQU8sU0FBU0MscUJBQVQsR0FBaUM7QUFDcEMsZ0JBQUlDLFNBQVMsS0FBS0MsS0FBbEI7QUFBQSxnQkFDSUMsZUFBZUYsT0FBT0UsWUFEMUI7QUFBQSxnQkFFSUMsc0JBQXNCSCxPQUFPRyxtQkFGakM7QUFBQSxnQkFHSUMsVUFBVUosT0FBT0ksT0FIckI7QUFBQSxnQkFJSUMsVUFBVUwsT0FBT0ssT0FKckI7QUFBQSxnQkFLSUMsc0JBQXNCTixPQUFPTSxtQkFMakM7QUFBQSxnQkFNSUMsZ0JBQWdCUCxPQUFPTyxhQU4zQjtBQUFBLGdCQU9JQyx1QkFBdUJSLE9BQU9RLG9CQVBsQzs7QUFVQSxnQkFBSUMsUUFBUSxDQUFDO0FBQ1RDLHdCQUFRTCxPQURDO0FBRVRNLHNCQUFNLGdDQUZHO0FBR1RDLDZCQUFhLDZFQUhKO0FBSVRDLHVCQUFPLEVBQUVDLGNBQWMsWUFBaEI7QUFKRSxhQUFELEVBS1Q7QUFDQ0osd0JBQVFKLG1CQURUO0FBRUNLLHNCQUFNLDRCQUZQO0FBR0NDLDZCQUFhLGtDQUFrQ04sbUJBQWxDLEdBQXdEO0FBSHRFLGFBTFMsRUFTVDtBQUNDSSx3QkFBUUgsYUFEVDtBQUVDSSxzQkFBTSxvQkFGUDtBQUdDQyw2QkFBYTtBQUhkLGFBVFMsRUFhVDtBQUNDRix3QkFBUUYsb0JBRFQ7QUFFQ0csc0JBQU0sd0JBRlA7QUFHQ0MsNkJBQWE7QUFIZCxhQWJTLEVBaUJUO0FBQ0NGLHdCQUFRLGNBQUtLLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlosT0FBbkIsRUFBNEIsT0FBNUIsQ0FEVDtBQUVDTyxzQkFBTSwwQkFGUDtBQUdDQyw2QkFBYTtBQUhkLGFBakJTLENBQVo7O0FBdUJBLG1CQUFPLGdCQUFNSyxhQUFOLENBQW9CLHNCQUFLQyxLQUF6QixFQUFnQyxFQUFFVCxPQUFPQSxLQUFULEVBQWdCVSxVQUFVO0FBQ3pEQyw4QkFBVTdCLFlBRCtDO0FBRXpEOEIsZ0NBQVk7QUFGNkM7QUFBMUIsYUFBaEMsQ0FBUDtBQUtIO0FBekN1QixLQUFELEVBMEN4QjtBQUNDeEIsYUFBSyxRQUROO0FBRUNDLGVBQU8sU0FBU3dCLE1BQVQsR0FBa0I7QUFDckIsbUJBQU8sZ0JBQU1MLGFBQU4sbUJBRUg7QUFDSUUsMEJBQVU7QUFDTkMsOEJBQVU3QixZQURKO0FBRU44QixnQ0FBWTtBQUZOO0FBRGQsYUFGRyxFQVFILGdCQUFNSixhQUFOLENBQ0ksSUFESixFQUVJO0FBQ0lFLDBCQUFVO0FBQ05DLDhCQUFVN0IsWUFESjtBQUVOOEIsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxlQVJKLENBUkcsRUFrQkgsS0FBS3RCLHFCQUFMLEVBbEJHLENBQVA7QUFvQkg7QUF2QkYsS0ExQ3dCLENBQTNCLEVBa0VJLENBQUM7QUFDREYsYUFBSyxpQkFESjtBQUVEQyxlQUFPLFlBQVk7QUFDZixnQkFBSXlCLE9BQU8saUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULENBQWlCeEIsS0FBakIsRUFBd0I7QUFDeEYsb0JBQUl5QixRQUFKLEVBQWNDLE9BQWQ7QUFDQSx1QkFBTyxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQ3hELDJCQUFPLENBQVAsRUFBVTtBQUNOLGdDQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNJLGlDQUFLLENBQUw7QUFDSU4sMkNBQVcsd0JBQVN6QixNQUFNZ0MsS0FBTixDQUFZQyxPQUFyQixDQUFYO0FBQ0FKLHlDQUFTRSxJQUFULEdBQWdCLENBQWhCO0FBQ0EsdUNBQU9OLFNBQVNTLE9BQVQsQ0FBaUJDLGtCQUFqQixHQUFzQ0MsSUFBdEMsRUFBUDs7QUFFSixpQ0FBSyxDQUFMO0FBQ0lWLDBDQUFVRyxTQUFTUSxJQUFuQjtBQUNBLHVDQUFPUixTQUFTUyxNQUFULENBQWdCLFFBQWhCLEVBQTBCO0FBQzdCTCw2Q0FBU2pDLE1BQU1nQyxLQUFOLENBQVlDLE9BRFE7QUFFN0I1Qix5REFBcUJxQixRQUFRLENBQVIsQ0FGUTtBQUc3QnpCLGtEQUFjeUIsUUFBUSxDQUFSLENBSGU7QUFJN0J4Qix5REFBcUJ3QixRQUFRLENBQVIsQ0FKUTtBQUs3QnZCLDZDQUFTdUIsUUFBUSxDQUFSLENBTG9CO0FBTTdCcEIsbURBQWVvQixRQUFRLENBQVIsQ0FOYztBQU83Qm5CLDBEQUFzQm1CLFFBQVEsQ0FBUixDQVBPO0FBUTdCdEIsNkNBQVNzQixRQUFRLENBQVI7QUFSb0IsaUNBQTFCLENBQVA7O0FBV0osaUNBQUssQ0FBTDtBQUNBLGlDQUFLLEtBQUw7QUFDSSx1Q0FBT0csU0FBU1UsSUFBVCxFQUFQO0FBckJSO0FBdUJIO0FBQ0osaUJBMUJNLEVBMEJKZixPQTFCSSxFQTBCSyxJQTFCTCxDQUFQO0FBMkJILGFBN0IwQyxDQUFoQyxDQUFYOztBQStCQSxxQkFBU2dCLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3pCLHVCQUFPbkIsS0FBSzVCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU82QyxlQUFQO0FBQ0gsU0FyQ007QUFGTixLQUFELENBbEVKOztBQTRHQSxXQUFPakQsWUFBUDtBQUNILENBdEhrQixrQkFBbkI7O2tCQXdIZUEsWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0U6XFxcXERBVEFcXFxcU1RVRFlcXFxcVkdVXFxcXDR0aCBZZWFyXFxcXFRoZXNpc1xcXFxjb2RlXFxcXHBhZ2VzXFxcXGNhbXBhaWduc1xcXFxzaG93LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbi8vIGltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG52YXIgQ2FtcGFpZ25TaG93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2FtcGFpZ25TaG93LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENhbXBhaWduU2hvdygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbXBhaWduU2hvdyk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDYW1wYWlnblNob3cuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25TaG93KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbXBhaWduU2hvdywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyQ2FtcGFpZ25EZXRhaWxzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNhbXBhaWduRGV0YWlscygpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNhbXBhaWduTmFtZSA9IF9wcm9wcy5jYW1wYWlnbk5hbWUsXG4gICAgICAgICAgICAgICAgY2FtcGFpZ25EZXNjcmlwdGlvbiA9IF9wcm9wcy5jYW1wYWlnbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBfcHJvcHMuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBjcmVhdG9yID0gX3Byb3BzLmNyZWF0b3IsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbiA9IF9wcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RzQ291bnQgPSBfcHJvcHMucmVxdWVzdHNDb3VudCxcbiAgICAgICAgICAgICAgICBudW1iZXJPZkNvbnRyaWJ1dG9ycyA9IF9wcm9wcy5udW1iZXJPZkNvbnRyaWJ1dG9ycztcblxuXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBbe1xuICAgICAgICAgICAgICAgIGhlYWRlcjogY3JlYXRvcixcbiAgICAgICAgICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBDYW1wYWlnblxcJ3MgQ3JlYXRvcicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY3JlYXRvciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgICAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgJyArIG1pbmltdW1Db250cmlidXRpb24gKyAnIHdlaSB0byBiZWNvbWUgYSBjb250cmlidXRvcidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgY29udHJpYnV0b3JzJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogbnVtYmVyT2ZDb250cmlidXRvcnMsXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBDb250cmlidXRvcnMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcbiAgICAgICAgICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuJ1xuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuR3JvdXAsIHsgaXRlbXM6IGl0ZW1zLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3MVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3OFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0NhbXBhaWduIFNob3cnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhbXBhaWduRGV0YWlscygpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FtcGFpZ24sIGRldGFpbHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmdldENhbXBhaWduRGV0YWlscygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBkZXRhaWxzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FtcGFpZ25OYW1lOiBkZXRhaWxzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FtcGFpZ25EZXNjcmlwdGlvbjogZGV0YWlsc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGRldGFpbHNbM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0c0NvdW50OiBkZXRhaWxzWzRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZDb250cmlidXRvcnM6IGRldGFpbHNbNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBkZXRhaWxzWzZdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICAgICAgfSgpXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbXBhaWduU2hvdztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYW1wYWlnbkRldGFpbHMiLCJfcHJvcHMiLCJwcm9wcyIsImNhbXBhaWduTmFtZSIsImNhbXBhaWduRGVzY3JpcHRpb24iLCJiYWxhbmNlIiwiY3JlYXRvciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwibnVtYmVyT2ZDb250cmlidXRvcnMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsImRldGFpbHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldENhbXBhaWduRGV0YWlscyIsImNhbGwiLCJzZW50IiwiYWJydXB0Iiwic3RvcCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFQQSxJQUFJQSxlQUFlLCtFQUFuQjtBQU1BOzs7QUFHQSxJQUFJQyxlQUFlLFVBQVVDLFVBQVYsRUFBc0I7QUFDckMsNEJBQVVELFlBQVYsRUFBd0JDLFVBQXhCOztBQUVBLGFBQVNELFlBQVQsR0FBd0I7QUFDcEIsc0NBQWdCLElBQWhCLEVBQXNCQSxZQUF0Qjs7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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\DATA\\STUDY\\VGU\\4th Year\\Thesis\\code\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\DATA\\STUDY\\VGU\\4th Year\\Thesis\\code\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})