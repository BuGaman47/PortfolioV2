import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
              <FontAwesomeIcon className='hover:scale-130 hover:text-primaryTitle transition-all' icon={faGithub} />
        </div>
    )
}

export default Contact;