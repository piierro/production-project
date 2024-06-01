import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectPage = () => {
    const {t} = useTranslation('project')

    return (
        <div>
            {t('О проектах')}
        </div>
    )
}

export default ProjectPage;