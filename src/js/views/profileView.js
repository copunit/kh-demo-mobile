define(['utils', 'hbs!js/templates/profile'], function (Utils, Template) {

	var selectList = {
		"careers": [
			{"value": 1, "career": "文教科卫专业人员"},
			{"value": 2, "career": "党政机关工作人员"},
			{"value": 3, "career": "企事业单位职工"},
			{"value": 4, "career": "证券从业人员"},
			{"value": 5, "career": "个体工商户"},
			{"value": 0, "career": "其它"}
		],
		"industries": [
			{"value": 1, "industry": "金融业"},
			{"value": 2, "industry": "制造业"},
			{"value": 3, "industry": "建筑业"},
			{"value": 4, "industry": "农业"},
			{"value": 0, "industry": "其它"}
		],
		"educations": [
			{"value": 1, "education": "博士"},
			{"value": 2, "education": "硕士"},
			{"value": 3, "education": "学士"},
			{"value": 4, "education": "大专"},
			{"value": 5, "education": "高中"},
			{"value": 0, "education": "其它"}
		]
	};

	function render(params) {
		var template = Template({model: selectList})
		$$('#userProfile').append(template);
		Utils.bindEvents(params.bindings);
	}

	return {
		render: render
	};
});