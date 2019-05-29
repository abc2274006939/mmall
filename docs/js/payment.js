webpackJsonp([9],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(84);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	var _mm= __webpack_require__(8);
	var header = {
	    init : function(){
	        this.onLoad();
	        this.bindEvent();
	    },
	    onLoad: function(){
	        var keyword = _mm.getUrlParam('keyword');
	        if(keyword){
	            $('#search-input').val(keyword);
	        };
	    },
	    bindEvent : function(){
	        var _this = this;
	        $('#search-btn').click(function(){
	            _this.searchSubmit();
	        });
	        $('#search-input').keyup(function(e){
	            if(e.keyCode === 13){
	                _this.searchSubmit();
	            }
	        });
	    },
	    searchSubmit:function(){
	        var keyword = $.trim($('#search-input').val());
	        if(keyword){
	            window.location.href='./list.html?keyword=' + keyword;
	        }
	        else{
	            _mm.goHome();
	        }
	    }
	};

	header.init();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var _mm= __webpack_require__(8);
	var _user= __webpack_require__(15);
	var _cart= __webpack_require__(16);
	var nav = {
	    init:function(){
	        this.bindEvent();
	        this.loadUserInfo();
	        this.loadCartCount();
	        return this;
	    },
	    bindEvent : function(){
	        $('.js-login').click(function(){
	            _mm.doLogin();
	        });
	        // 注册点击事件
	        $('.js-register').click(function(){
	            window.location.href = './user-register.html';
	        });
	        // 退出点击事件
	        $('.js-logout').click(function(){
	            _user.logout(function(res){
	                window.location.reload();
	            }, function(errMsg){
	                _mm.errorTips(errMsg);
	            });
	        });
	    },
	    // 加载用户信息
	    loadUserInfo:function(){
	        _user.checkLogin(function(res){
	            $('.user.not-login').hide().siblings('.user.login').show()
	                .find('.username').text(res.username);
	        }, function(errMsg){
	        });
	    },
	    // 加载购物车数量
	    loadCartCount : function(){
	        _cart.getCartCount(function(res){
	            $('.nav .cart-count').text(res || 0);
	        }, function(errMsg){
	            $('.nav .cart-count').text(0);
	        });
	    }
	};

	module.exports = nav.init();

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _user = {
	    // 用户登录
	    login : function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/login.do'),
	            data: userInfo,
	            method: 'POST',
	            success: resolve,
	            error: reject
	        });
	    },
	    // 检查用户名
	    checkUsername: function(username, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/check_valid.do'),
	            data: {
	                type: 'username',
	                str: username
	            },
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 用户注册
	    register : function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/register.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 检查登录状态
	    checkLogin:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/get_user_info.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 获取用户密码提示问题
	    getQuestion:function(username, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_get_question.do'),
	            data: {
	                username:username
	            },
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 检查密码提示问题答案
	    checkAnswer:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_check_answer.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 重置密码
	    resetPassword:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/forget_reset_password.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 获取用户信息
	    getUserInfo:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/get_information.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 更新个人信息
	    updateUserInfo:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/update_information.do'),
	            data: userInfo,
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    },
	    // 登录状态下更新密码
	    updatePassword:function(userInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/reset_password.do'),
	            data:userInfo,
	            method:'POST',
	            success:resolve,
	            error: reject
	        });
	    },
	    // 登出
	    logout:function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/user/logout.do'),
	            method:'POST',
	            success:resolve,
	            error:reject
	        });
	    }
	}
	module.exports = _user;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _cart = {
	    // 获取购物车数量
	    getCartCount : function(resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
	            success:resolve,
	            error: reject
	        });
	    },
	    // 添加到购物车
	    addToCart : function(productInfo, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/cart/add.do'),
	            data: productInfo,
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取购物车列表
	    getCartList : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/list.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选择购物车商品
	    selectProduct : function(productId, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/select.do'),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选择购物车商品
	    unselectProduct : function(productId, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/un_select.do'),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选中全部商品
	    selectAllProduct : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/select_all.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选中全部商品
	    unselectAllProduct : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/un_select_all.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 更新购物车商品数量
	    updateProduct : function(productInfo, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/update.do'),
	            data    : productInfo,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 删除指定商品
	    deleteProduct : function(productIds, resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/delete_product.do'),
	            data    : {
	                productIds : productIds
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	}
	module.exports = _cart;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Rosen
	* @Date:   2017-06-10 20:05:19
	* @Last Modified by:   Rosen
	* @Last Modified time: 2017-06-10 20:35:47
	*/

	'use strict';

	__webpack_require__(85);
	__webpack_require__(12);
	__webpack_require__(2);
	var _mm             = __webpack_require__(8);
	var _payment        = __webpack_require__(87);
	var templateIndex   = __webpack_require__(88);

	// page 逻辑部分
	var page = {
	    data: {
	        orderNumber : _mm.getUrlParam('orderNumber')
	    },
	    init: function(){
	        this.onLoad();
	    },
	    onLoad : function(){
	        // 加载detail数据
	        this.loadPaymentInfo();
	    },
	    // 加载订单列表
	    loadPaymentInfo: function(){
	        var _this           = this,
	            paymentHtml     = '',
	            $pageWrap       = $('.page-wrap');
	        $pageWrap.html('<div class="loading"></div>');
	        _payment.getPaymentInfo(this.data.orderNumber, function(res){
	            // 渲染html
	            paymentHtml = _mm.renderHtml(templateIndex, res);
	            $pageWrap.html(paymentHtml);
	            _this.listenOrderStatus();
	        }, function(errMsg){
	            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
	        });
	    },
	    // 监听订单状态
	    listenOrderStatus : function(){
	        var _this = this;
	        this.paymentTimer = window.setInterval(function(){
	            _payment.getPaymentStatus(_this.data.orderNumber, function(res){
	                if(res == true){
	                    window.location.href 
	                        = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
	                }
	            });
	        }, 5e3);
	    }
	};
	$(function(){
	    page.init();
	});

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	var _mm = __webpack_require__(8);
	var _payment = {
	    // 获取支付信息
	    getPaymentInfo: function(orderNumber, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/pay.do'),
	            data: {
	                orderNo:orderNumber
	            },
	            success:resolve,
	            error:reject
	        });
	    },
	    // 获取订单状态
	    getPaymentStatus: function(orderNumber, resolve, reject){
	        _mm.request({
	            url: _mm.getServerUrl('/order/query_order_pay_status.do'),
	            data: {
	                orderNo: orderNumber
	            },
	            success:resolve,
	            error:reject
	        });
	    }
	}
	module.exports = _payment;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = "<p class=\"payment-tips\">订单提交成功，请尽快支付！定单号：{{orderNo}}</p> <p class=\"payment-tips enhance\">请使用支付宝App扫描如下二维码进行支付：</p> <div class=\"img-con\"> <img class=\"qr-code\" src=\"{{qrUrl}}\" alt=\"支付二维码\"/> </div>";

/***/ })

});