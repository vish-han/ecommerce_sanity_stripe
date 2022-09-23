import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'pe9y6ipt',
  dataset: 'production',
  apiVersion: '2022-09-23',
  useCdn: true,
  token: 'skkeNGqlWwJtBs4eMOOb4iqNIEKG3dD5srhtS13bDpo42vxXKpLYYIP7aFOcbtkPOCrSM6E8262ncOzyaS2ceOuBZoEEhydtdImBXmYLuuaoHqP5iPwRRhNcYj0bG0wngKpQVoZPYGVtgTT872OPUnV3YlEs4hLbqg119gSks8Jegr9TL6J2'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);