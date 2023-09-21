import { useCallback, useEffect } from 'react'
import { Alert, IconButton } from '@mui/material'
import { CheckCircleOutline, Close } from '@mui/icons-material'

import { useContekst } from '../../context/index'

const Success: React.FC = () => {
  const context = useContekst()

  const onClose = useCallback(() => {
    context.setSuccess('')
  }, [context])

  const closeButton = () => (
    <IconButton color='inherit' size='small' onClick={ onClose }>
      <Close />
    </IconButton>
  )

  useEffect( () => {
    if ( context.success ) {
      setTimeout( () => {
        onClose()
      }, 3000 )
    }

  }, [context.success, onClose] )

  if ( context.success ) {
    return (
      <Alert
        action={ closeButton() }
        icon={ <CheckCircleOutline fontSize='inherit' /> }
        severity='success'
        variant='filled'
        sx={ { zIndex: 100, position: 'fixed', bottom: 10, minWidth: 'calc(100vw - 50px)' } }
      >
        { `${ context.success } 💪` }
      </Alert>
    )
  }

  return null
}

export default Success
