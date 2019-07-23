import { useDispatch } from 'react-redux';

/**
 * Dispatch asynchronous action and shows the progress of the action.
 *
 * @param {function} asyncAction
 * @param {function} callback
 * @param {Object} opts
 * @return {function} asyncDispatchAction
 */
export const useAsyncDispatch = (asyncAction, callback, opts = { showProgressAction: null, hideProgressAction: null }) => {
	const dispatch = useDispatch();
	if (typeof asyncAction !== 'function') {
		return;
	}
	const asyncDispatchAction = async (params) => {
		const { showProgressAction, hideProgressAction } = opts;
		if (showProgressAction && typeof showProgressAction === 'function') {
			dispatch(showProgressAction());
		}
		try {
			const result = await dispatch(asyncAction(params));
			if (callback && typeof callback === 'function') {
				callback(result);
			}
			return result;
		} finally {
			if (showProgressAction && typeof showProgressAction === 'function') {
				dispatch(hideProgressAction());
			}
		}
	};
	return asyncDispatchAction;
};
