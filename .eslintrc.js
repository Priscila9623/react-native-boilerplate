module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
	  "no-tabs": ["error", { "allowIndentationTabs": true }],
	  "no-plusplus":"off",
	  "max-len":["error", 120],
	  "linebreak-style":0,
	  "no-restricted-syntax":"off",
	  "jsx-a11y/label-has-associated-control": "off",
	  "indent": ["error", "tab"],
	  "react/jsx-indent": ["error", "tab"],
	  "react/jsx-indent-props": ["error", "tab"],
	  "quotes": ["error", "single", { "allowTemplateLiterals": true }],
	  "jsx-quotes":["error", "prefer-single"],
	  "react/jsx-filename-extension":[1, {"extensions":[".js", ".jsx"]}],
	  "prettier/prettier":"off",
	  "react-hooks/exhaustive-deps":"off"
  },
  settings: {
	  "import/resolver": {
		  "babel-module": {
			  "module-resolver": {
				  "alias": {
					  "@icons/*"     : "app/assets/icons/*",
					  "@images/*"    : "app/assets/images/*",
					  "@components/*": "app/components/*",
					  "@helpers/*"   : "app/helpers/*",
					  "@hooks/*"     : "app/hooks/*",
					  "@screens/*"   : "app/screens/*",
					  "@actions/*"   : "app/store/actions/*",
					  "@config/*"    : "app/config/*",
				  }
			  }
		  }
	  }
  }
};
