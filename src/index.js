import Theme from '@swup/theme';
import styles from './index.css';

export default class ThemeName extends Theme {
	name = 'ThemeName';

	/* Default options */
	defaults = {
		mainElement: '#swup'
	};

	/**
	 * Executed each time an instance of this theme is created.
	 * Can be used for things that don't rely on access to the swup instance.
	 */
	constructor(options = {}) {
		super();

		/* Merge default options and user options */
		this.options = { ...this.defaults, options };
	}

	/**
	 * Executed when swup is initialized with this theme.
	 * You can use this.swup here to access the swup instance.
	 */
	mount() {
		// Apply imported styles
		this.applyStyles(styles);

		// Add classname to element
		this.addClassName(this.options.mainElement, 'main');

		// Append elements to body if needed
		this.applyHTML('<div></div>');
	}

	/**
	 * Executed when a swup instance with this theme is disabled.
	 * You can use this.swup here to access the swup instance.
	 * Make sure to undo any DOM changes and remove event listeners here.
	 */
	unmount() {}
}
