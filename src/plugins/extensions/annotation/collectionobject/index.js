import form from './form';
import fields from './fields';


export default configContext => ({
  form: form(configContext),
  fields: fields(configContext),
});
