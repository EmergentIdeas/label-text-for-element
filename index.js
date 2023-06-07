/**
  * Gets the label text for an element, like an input or text
  * area. Assumes that the element is either in a label element
  * or is referenced by id by a label element or has an aria-label
  * attribute
  * @param {Element} elm - A form element (normally) but any element will do
  */
function labelTextForElement(elm) {
	if(!elm) {
		return null
	}
	let label = elm.getAttribute('aria-label')
	if(label) {
		return label
	}
	
	label = elm.closest('label')
	if(label) {
		return label.innerText
	}
	
	let id = elm.getAttribute('id')
	if(id) {
		label = document.querySelector(`label[for="${id}"]`)	
		if(label) {
			return label.innerText
		}
	}

	return null
}

module.exports = labelTextForElement
