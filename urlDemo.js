import url from 'url';

const fp = url.fileURLToPath(import.meta.url);
console.log(fp);

const link = 'https://www.google.com/search?q=youtube&oq=yo&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyDwgCEEUYORiDARixAxiABDINCAMQLhiDARixAxiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIKCAYQABixAxiABDINCAcQABiDARixAxiABDIHCAgQABiPAjIHCAkQABiPAtIBCTU1NzFqMGoxNagCCLACAfEFO4-FezwgninxBTuPhXs8IJ4p&sourceid=chrome&ie=UTF-8';

const urlObj = new URL(link);

console.log(urlObj);

const searchParams = urlObj.searchParams;
console.log(`Search Parameters: ${searchParams.toString()}`);
console.log(`Value of 'q' parameter: ${searchParams.get('q')}`);


searchParams.append('list', '7');
console.log(`Updated Search Parameters: ${searchParams.toString()}`);

searchParams.delete('oq');
console.log(`Search Parameters after deletion: ${searchParams.toString()}`);
