/* eslint-disable prettier/prettier */
export default function(doc) {
	// Return the path depending on Prismic Document's type
	// If it is a Single Custom Type with the API ID of "home"
	if (doc.type === 'blog') {
		return '/blog';
	}
	// If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)
	if (doc.type === 'blog_post') {
		return '/blog/' + doc.uid;
	}

	// Default to the root
	return '/';
}
