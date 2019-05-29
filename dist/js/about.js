webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(12);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
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
/* 16 */
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

/***/ })
]);