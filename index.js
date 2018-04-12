
function hasClass(target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function confirm(content, title='Confirm', btnTexts=['cancel', 'OK']) {
	return new Promise((resolve, reject) => {
		const html = `
			<div class="confirm-html-wrap">
				<div class="confirm-html-box">
					<div class="confirm-html-hd">
						${title}
					</div>
					<div class="confirm-html-bd">
						${content}
					</div>
					<div class="confirm-html-ft">
						<button type="button" class="confirm-html-btn confirm-html-default">
							${btnTexts[0]}
						</button>
						<button type="button" class="confirm-html-btn confirm-html-primary">
							${btnTexts[1]}
						</button>
					</div>
				</div>
			</div>
		`

		const elem = document.createElement('div')
		elem.innerHTML = html
		elem.addEventListener('click', function(e) {
			if(hasClass(e.target, 'confirm-html-default')) {
        document.body.removeChild(elem)
        reject()
			}
      if(hasClass(e.target, 'confirm-html-primary')) {
        document.body.removeChild(elem)
        resolve()
      }
		})
		document.body.appendChild(elem)
	})
}

export default confirm
