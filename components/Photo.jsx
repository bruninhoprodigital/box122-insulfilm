import { existsSync } from 'node:fs';
import { join } from 'node:path';

export default function Photo({ photo, priority = false }) {
  const local = '/fotos/' + photo.file + '.webp';
  const available = existsSync(join(process.cwd(), 'public', 'fotos', photo.file + '.webp'));
  return (
    <div className="photo">
      <img src={available ? local : '/fotos/placeholder.svg'}
        alt={available ? photo.label : ''}
        width="1200" height="900" loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined} decoding={priority ? 'auto' : 'async'} />
      {available && photo.caption && <span className="photo-label">{photo.caption}</span>}
      {!available && <span className="photo-label">Foto oficial a inserir · {photo.label}</span>}
    </div>
  );
}
